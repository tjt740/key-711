import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, CreditCard, Lock, Mail, ChevronLeft, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// 模拟产品数据库
const productsDB: Record<number, {
  id: number;
  title: string;
  duration: string;
  price: number;
  originalPrice: number;
  imagePlaceholder: string;
  color: string;
}> = {
  1: { id: 1, title: "Netflix Premium (4K UHD)", duration: "1 个月 / 独享车位", price: 3.67, originalPrice: 15.99, imagePlaceholder: "N", color: "bg-red-600" },
  2: { id: 2, title: "Spotify Premium", duration: "1 个月 / 独享车位", price: 1.99, originalPrice: 9.99, imagePlaceholder: "S", color: "bg-green-500" },
  3: { id: 3, title: "YouTube Premium", duration: "1 个月 / 独享车位", price: 2.50, originalPrice: 13.99, imagePlaceholder: "Y", color: "bg-red-500" },
  4: { id: 4, title: "Disney+ Premium", duration: "1 个月 / 独享车位", price: 2.00, originalPrice: 10.99, imagePlaceholder: "D", color: "bg-blue-900" },
  5: { id: 5, title: "ChatGPT Plus", duration: "1 个月 / 独享车位", price: 5.99, originalPrice: 20.00, imagePlaceholder: "C", color: "bg-teal-600" },
  6: { id: 6, title: "Office 365", duration: "1 个月 / 独享车位", price: 1.50, originalPrice: 6.99, imagePlaceholder: "O", color: "bg-orange-600" },
};

// 支付方式选项
const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", iconPlaceholder: "VISA / MC", color: "bg-blue-600" },
  { id: "paypal", name: "PayPal", iconPlaceholder: "PayPal", color: "bg-[#003087]" },
  { id: "crypto", name: "Cryptocurrency (USDT)", iconPlaceholder: "USDT", color: "bg-green-500" },
];

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get("productId")) || 1;
  const product = productsDB[productId] || productsDB[1];

  const [email, setEmail] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);
  const [couponCode, setCouponCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const total = product.price;

  const handlePay = async () => {
    if (!email.includes("@")) {
      alert("请填写有效的电子邮箱用于接收账号");
      return;
    }
    setIsProcessing(true);
    console.log("发起支付:", { productId: product.id, email, paymentMethod: selectedPayment, total });
    setTimeout(() => {
      setIsProcessing(false);
      alert("演示模式：支付流程已触发。在真实环境中，这里会跳转到 Stripe/PayPal 页面。");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* 简化的导航栏 */}
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mr-6">
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">返回首页</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">G</div>
            <span className="text-xl font-bold text-foreground">安全收银台</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* 左侧：主要信息填写区 */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 模块 1: 接收账号的邮箱 */}
            <section className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm">1</span>
                接收邮箱
              </h2>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@example.com (重要：用于接收账号密码)"
                  className="w-full pl-11 pr-4 py-6 bg-muted/50 border-border rounded-xl"
                  required
                />
                <p className="text-xs text-muted-foreground mt-2 pl-1">我们承诺保护您的隐私，绝不发送垃圾邮件。</p>
              </div>
            </section>

            {/* 模块 2: 支付方式选择 */}
            <section className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm">2</span>
                选择支付方式
              </h2>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <label 
                    key={method.id} 
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPayment === method.id 
                        ? "border-primary bg-primary/5 shadow-md" 
                        : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="hidden" 
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === method.id ? "border-primary bg-primary" : "border-muted-foreground/40"}`}>
                        {selectedPayment === method.id && <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`h-8 px-3 ${method.color} text-white text-xs font-bold rounded flex items-center justify-center`}>
                          {method.iconPlaceholder}
                        </div>
                        <span className="font-medium text-foreground">{method.name}</span>
                      </div>
                    </div>
                    {selectedPayment === method.id && <CheckCircle2 className="w-5 h-5 text-primary" />}
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* 右侧：订单摘要 (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card p-6 rounded-2xl shadow-lg border border-border">
              <h3 className="text-lg font-bold text-foreground mb-6">订单摘要</h3>

              {/* 产品信息 */}
              <div className="flex gap-4 mb-6 pb-6 border-b border-border">
                <div className={`w-16 h-16 ${product.color} rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-sm`}>
                  {product.imagePlaceholder}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground line-clamp-1">{product.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{product.duration}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-foreground">${product.price}</div>
                  <div className="text-xs text-muted-foreground line-through">${product.originalPrice}</div>
                </div>
              </div>

              {/* 优惠券输入框 */}
              <div className="mb-6 pb-6 border-b border-border">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
                  <Ticket className="w-4 h-4" />
                  优惠码
                </label>
                <div className="flex gap-2">
                  <Input 
                    type="text" 
                    placeholder="输入折扣代码"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    className="flex-1 bg-muted/50"
                  />
                  <Button variant="secondary" size="sm" className="px-4">
                    应用
                  </Button>
                </div>
              </div>

              {/* 价格明细 */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>小计</span>
                  <span>${product.price}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>手续费 (0%)</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="font-bold text-lg text-foreground">总计</span>
                  <span className="font-extrabold text-3xl text-primary">${total}</span>
                </div>
              </div>

              {/* 支付按钮 */}
              <Button 
                onClick={handlePay}
                disabled={isProcessing}
                variant="hero"
                className="w-full py-6 text-lg"
              >
                {isProcessing ? (
                  <>正在处理...</>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    安全支付 ${total}
                  </>
                )}
              </Button>
              
              {/* 底部安全提示 */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>SSL 加密传输，保障支付安全</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
