import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, LogOut, User as UserIcon, Package, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { format } from "date-fns";

type Order = {
  id: string;
  product_title: string;
  duration: string;
  amount: number;
  currency: string;
  payment_method: string;
  status: string;
  account_email: string | null;
  starts_at: string;
  expires_at: string;
  created_at: string;
};

type Profile = {
  display_name: string | null;
  email: string | null;
  avatar_url: string | null;
};

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setDataLoading(true);
      const [{ data: p }, { data: o }] = await Promise.all([
        supabase.from("profiles").select("display_name, email, avatar_url").eq("id", user.id).maybeSingle(),
        supabase.from("orders").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);
      setProfile(p);
      setOrders(o ?? []);
      setDataLoading(false);
    })();
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    toast.success("已退出登录");
    navigate("/");
  };

  const getDaysLeft = (expiresAt: string) => {
    const ms = new Date(expiresAt).getTime() - Date.now();
    return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
  };

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ChevronLeft className="w-5 h-5" /> 返回首页
          </Link>
          <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2">
            <LogOut className="w-4 h-4" /> 退出登录
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 lg:py-12 max-w-5xl">
        {/* 用户信息卡 */}
        <section className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
              ) : (
                <UserIcon className="w-8 h-8" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {profile?.display_name || user.email?.split("@")[0]}
              </h1>
              <p className="text-sm text-muted-foreground">{profile?.email || user.email}</p>
            </div>
          </div>
        </section>

        {/* 订单列表 */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Package className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">我的订单</h2>
            <span className="text-sm text-muted-foreground">({orders.length})</span>
          </div>

          {dataLoading ? (
            <div className="text-center text-muted-foreground py-12">加载订单中...</div>
          ) : orders.length === 0 ? (
            <div className="bg-card border border-dashed border-border rounded-2xl p-12 text-center">
              <Package className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">您还没有任何订单</p>
              <Link to="/"><Button variant="hero">去选购</Button></Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => {
                const daysLeft = getDaysLeft(order.expires_at);
                const isExpired = daysLeft <= 0;
                return (
                  <div key={order.id} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{order.product_title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{order.duration}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isExpired ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-600 dark:text-green-400"
                      }`}>
                        {isExpired ? "已过期" : `有效 · 剩余 ${daysLeft} 天`}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-4 border-t border-border">
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                          <Calendar className="w-3.5 h-3.5" />开始日期
                        </div>
                        <div className="font-medium">{format(new Date(order.starts_at), "yyyy-MM-dd")}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                          <Calendar className="w-3.5 h-3.5" />到期日期
                        </div>
                        <div className="font-medium">{format(new Date(order.expires_at), "yyyy-MM-dd")}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                          <CreditCard className="w-3.5 h-3.5" />支付方式
                        </div>
                        <div className="font-medium uppercase">{order.payment_method}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">支付金额</div>
                        <div className="font-bold text-primary">${Number(order.amount).toFixed(2)}</div>
                      </div>
                    </div>

                    {order.account_email && (
                      <div className="mt-4 p-3 rounded-lg bg-muted/50 text-sm">
                        <span className="text-muted-foreground">账号：</span>
                        <span className="font-mono">{order.account_email}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
