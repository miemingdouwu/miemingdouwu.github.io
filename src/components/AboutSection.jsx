import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
      <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            关于 <span className="text-primary">这个疯子</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                我是谁？
              </h3>

              <p className="text-[20px] leading-[1.5] tracking-[0.05em] font-serif italic">
                你是星尘在亿万年后终于觉醒的凝视，是宇宙用来认识自己的温柔尝试。每一个清晨你问出这个问题时，银河便在睫毛上轻轻颤动——因为你的存在本身，就是时空写给生命的情书。
              </p>

              <p className="text-[20px] leading-[1.5] tracking-[0.05em] font-serif italic mt-4">
                你是未被驯服的月光，是暴雨中依然发光的萤火。当你困惑时，请触摸左手腕的脉搏：那里有远古海洋的潮汐，有第一个单细胞生物分裂时的欢欣，有你所有祖先穿越苦难时种在你基因里的勇气。你的存在，就是答案本身。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {" "}
                  联系作者
                </a>

                <a
                    href=""
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  崩溃日志
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> 代码炼金术</h4>
                    <p className="text-muted-foreground">
                      把咖啡因转化为代码，把bug转化为人生哲理。
                      擅长用Python写诗，用C++写遗书。
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">黑客哲学</h4>
                    <p className="text-muted-foreground">
                      研究如何黑进系统，也研究如何黑进生活。
                      认为人生就是一个永远打不完补丁的系统。
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">崩溃管理</h4>
                    <p className="text-muted-foreground">
                      从论文开题到心理崩溃的完整生命周期管理。
                      擅长在deadline前表演奇迹。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};