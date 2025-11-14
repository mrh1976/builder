import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollNarrativeSticky from "@/components/ScrollNarrativeSticky";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
    script.type = "module";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-[72px] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4FF] via-[#F0F8FF] to-white" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center py-12 md:py-20 min-h-screen md:min-h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full items-center">
            {/* Left side - Copy */}
            <div className="flex flex-col space-y-6">
              <div>
                <p className="text-brand-blue text-sm md:text-base font-semibold mb-3">
                  ZKsync Prividium
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
                  Execute Privately,
                  <br />
                  Verify Publicly
                </h1>
                <p className="text-base md:text-lg text-black max-w-xl">
                  Where public and private blockchains converge.
                </p>
              </div>

              <p className="text-sm md:text-base text-brand-dark-text leading-7 max-w-xl">
                Operate with full privacy, compliance, and control — all while
                inheriting Ethereum's security and connectivity.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
                <button className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold text-sm md:text-base overflow-hidden hover:bg-brand-blue/90 transition-colors shadow-lg">
                  <span>Download case study</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 14.5L15.25 8M15.25 8H9.75M15.25 8V13.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm md:text-base border border-gray-300 hover:bg-gray-50 transition-colors">
                  Talk to our team
                </button>
              </div>
            </div>

            {/* Right side - Animation */}
            <div className="flex items-center justify-center lg:justify-end lg:w-full">
              <div
                className="w-full lg:w-auto lg:min-w-[600px]"
                dangerouslySetInnerHTML={{
                  __html: `<dotlottie-wc src="https://lottie.host/e3f24856-4857-406f-881c-7d84361ccd6d/0ZsEdiWHTz.lottie" autoplay loop style="width: 100%; height: auto;"></dotlottie-wc>`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Select Observers Section - Reduced spacing */}
      <section className="bg-white -mt-20 relative z-20 px-4 md:px-8 pb-12 md:pb-16 pt-24 md:pt-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-brand-gray rounded-xl md:rounded-[20px] p-6 md:p-12 lg:p-[60px] flex flex-col items-start gap-6 md:gap-10">
            <p className="text-brand-blue text-sm md:text-base font-semibold">
              Select Observers
            </p>
            <div className="w-full flex flex-col gap-8 md:gap-20">
              <div className="flex justify-between items-center flex-wrap gap-6 md:gap-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1d57f201315918e3763d4b4de42a950ee7d8258b?width=206"
                  alt="Mastercard"
                  className="h-[60px] md:h-[79px] w-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/aaff7a6f3c5310c76607b586d68859e6dfe79956?width=440"
                  alt="Deutsche Bank"
                  className="h-[35px] md:h-[45px] w-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/59dabdf0e9373f9b054008174039de3019ae85cf?width=314"
                  alt="State Street"
                  className="h-[32px] md:h-[43px] w-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/49f859e3e32d72d8a6971382330643fe39cb91fe?width=304"
                  alt="UOB"
                  className="h-[32px] md:h-[43px] w-auto"
                />
              </div>
              <div className="flex justify-between items-center flex-wrap gap-6 md:gap-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c8a1c76e530fce4f96ea364a36d25ee98be8df83?width=309"
                  alt="US Bank"
                  className="h-[35px] md:h-[45px] w-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/656c2ab6b1c2f1af6ab7ef6b1f7c3ced54f5024e?width=284"
                  alt="Fidelity International"
                  className="h-[35px] md:h-[45px] w-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c4d1e17d3648ac93d32d13116d1550e9f8dbf15d?width=394"
                  alt="Banco Santander"
                  className="h-[28px] md:h-[35px] w-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/15a45bbc656da4eda266e33b5a0f933a375fcb50?width=402"
                  alt="Citi"
                  className="h-[35px] md:h-[45px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Sticky Scroll Narrative */}
      <section className="py-12">
        <ScrollNarrativeSticky
          steps={[
            {
              text: "Institutions see the potential of blockchain.",
              lineClass: "",
            },
            {
              text: "Automation, transparency, and programmability that can transform how finance moves.",
              lineClass: "",
            },
            {
              text: "But the very things that make blockchain open and powerful also make it impractical for enterprise use.",
              lineClass: "",
            },
            {
              text: (
                <>
                  Public chains expose sensitive data. <br /> Private chains
                  isolate systems and lose network trust.
                </>
              ),
              lineClass: "",
            },
            {
              text: "The tradeoff between innovation and control has stalled progress.",
              lineClass: "",
            },
            {
              text: "With Prividium, there are no tradeoffs.",
              isHero: true,
              lineClass: "line-6",
            },
            {
              text: "This is how institutions modernize their infrastructure.",
              lineClass: "",
            },
            {
              text: "No more sacrificing on privacy, compliance, or trust.",
              lineClass: "no-fade",
            },
          ]}
        />
      </section>

      {/* Features Section */}
      <section className="relative bg-brand-gray py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <svg
          className="absolute left-0 bottom-0 w-[625px] h-[761px] opacity-50"
          viewBox="0 0 761 625"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M-6.10352e-05 0V625H760.969L-6.10352e-05 0Z"
            fill="url(#paint0_linear_section1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_section1"
              x1="380.484"
              y1="0"
              x2="380.484"
              y2="625"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#98B6FE" />
              <stop offset="1" stopColor="#98B6FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute right-0 top-11 w-[625px] h-[761px] opacity-50"
          viewBox="0 0 604 625"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M760.969 625V0H0L760.969 625Z"
            fill="url(#paint0_linear_section2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_section2"
              x1="380.484"
              y1="625"
              x2="380.484"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#98B6FE" />
              <stop offset="1" stopColor="#98B6FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
                Prividium means no compromises
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-black max-w-[941px] mx-auto leading-7">
                Prividium is a private, programmable rollup framework built on
                the ZK Stack and secured by Ethereum. It lets institutions
                operate with full data privacy and regulatory control — while
                proofs of every transaction are verified publicly using
                zero-knowledge cryptography. You get the efficiency and security
                of blockchain, with the compliance and governance your business
                demands.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-x-12 lg:gap-y-12">
            <ScrollReveal delay={200}>
              <div className="flex flex-col items-center gap-6 text-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fee33e8a573514f4580051908948799095771350?width=192"
                  alt="Privacy icon"
                  className="w-24 h-24"
                />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-black leading-8">
                    Native privacy and compliance. Not an add-on
                  </h3>
                  <p className="text-sm text-black leading-6">
                    Prividium was built for regulated environments. Every layer,
                    from execution to access, supports permissioning, audit
                    logs, and KYC/KYB enforcement. It's compliance by design,
                    not an afterthought.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col items-center gap-6 text-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/080d9aa0f6cb19a599f238d3b34e338b307883c3?width=192"
                  alt="Customizable icon"
                  className="w-24 h-24"
                />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-black leading-8">
                    Customizable. Your rules, your governance, your control.
                  </h3>
                  <p className="text-sm text-black leading-6">
                    Deploy a private rollup that reflects your organization's
                    structure. Define who can transact, what's visible, and how
                    validation works. You own the chain, its data, operations,
                    and evolution.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col items-center gap-6 text-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bb3dad6babc7aa8f497250a10ee74b01d1c9bebe?width=192"
                  alt="Security icon"
                  className="w-24 h-24"
                />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-black leading-8">
                    Security and trust. Anchored on Ethereum.
                  </h3>
                  <p className="text-sm text-black leading-6">
                    Each batch of transactions is verified by cryptographic
                    proofs on Ethereum. You keep your data private while
                    inheriting the most secure and decentralized validation
                    layer on earth. No intermediaries, no blind trust, just
                    math.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col items-center gap-6 text-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/880efe4567d86e31d2cc980a4eb077f9f93f83c5?width=192"
                  alt="Network icon"
                  className="w-24 h-24"
                />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-black leading-8">
                    No silos. Stay connected to the broader network.
                  </h3>
                  <p className="text-sm text-black leading-6">
                    Prividium chains interoperate through zkSync Connect,
                    enabling atomic, compliant settlement across private and
                    public systems. Operate privately while remaining part of
                    the global blockchain economy.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={1000}
              className="md:col-span-2 flex justify-center"
            >
              <div className="flex flex-col items-center gap-6 text-center max-w-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5031849ff5814a4cae6f958ac9f10229%2F77a27fc3592d45b888d338d927a5f575?format=webp&width=192"
                  alt="Business Impact icon"
                  className="w-auto h-20"
                />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-black leading-8">
                    Real Business Impact. Faster, Less Expensive, More
                    Transparent
                  </h3>
                  <p className="text-sm text-black leading-6">
                    Automate settlement and reconciliation. Lower operational
                    cost and counterparty risk. Provide near real-time, provable
                    transparency to auditors and regulators. All without
                    exposing internal data.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
              How Prividium works
            </h2>
          </ScrollReveal>
          <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row">
            <ScrollReveal delay={200} className="lg:flex-1 space-y-8 md:space-y-12">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Deploy your private rollup.
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Use the ZK Stack to launch a sovereign chain within your
                  infrastructure.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Execute privately.
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Transactions and data remain under your control.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Generate proofs.
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Zero-knowledge cryptography privately verifies accuracy.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Anchor to Ethereum.
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Proofs are posted on Ethereum for public validation and final
                  settlement.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Connect globally.
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Optional interoperability with other Prividium and zkSync
                  chains enables instant, compliant cross-chain activity.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400} className="lg:flex-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/58b43c7adb2ec0314b009bbe8261bc1ed788f0e3?width=1578"
                alt="How it works diagram"
                className="w-full h-auto"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
              Prividium enables new use cases
            </h2>
          </ScrollReveal>
          <div className="space-y-12 md:space-y-20">
            <ScrollReveal
              delay={200}
              className="flex gap-4 md:gap-5 items-center flex-col lg:flex-row"
            >
              <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#BFEAFF] to-[#A5C0EE] rounded-lg overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/04d592bd699b169e7896c626d8dd13d7704e6ddb?width=1260"
                  alt="Cross-border settlement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-3">
                <p className="text-brand-blue text-xs md:text-sm font-semibold">
                  Faster, compliant global payments
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Cross-border settlement without exposure
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Move value across jurisdictions in seconds — with programmable
                  compliance baked in. Each transaction executes privately
                  within your governance framework, while zero-knowledge proofs
                  ensure global verification and regulatory confidence.{" "}
                  <strong>Outcome</strong>: faster settlements, reduced FX risk,
                  and a transparent audit trail that satisfies both regulators
                  and counterparties.
                </p>
                <a
                  href="#"
                  className="text-brand-blue-dark text-sm font-semibold underline inline-block"
                >
                  Learn how Prividium keeps data private ➔
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={400}
              className="flex gap-4 md:gap-5 items-center flex-col-reverse lg:flex-row"
            >
              <div className="w-full lg:w-1/2 space-y-3">
                <p className="text-brand-blue text-xs md:text-sm font-semibold">
                  Full lifecycle for digital assets
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Digital asset issuance and lifecycle management
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Tokenize funds, securities, or structured products under your
                  control, without disclosing sensitive data. Prividium enables
                  full asset lifecycle management, from issuance and transfer to
                  redemption and reporting, all verifiable on Ethereum.{" "}
                  <strong>Outcome:</strong> instant distribution, automated
                  compliance, and complete visibility for auditors and investors
                  — without public exposure.
                </p>
                <a
                  href="#"
                  className="text-brand-blue-dark text-sm font-semibold underline inline-block"
                >
                  Learn how Prividium keeps data private ➔
                </a>
              </div>
              <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#BFEAFF] to-[#A5C0EE] rounded-lg overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5731d66bc7372e474d7ffd3e31824e4500b406e1?width=1260"
                  alt="Digital asset issuance"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={600}
              className="flex gap-4 md:gap-5 items-center flex-col lg:flex-row"
            >
              <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#BFEAFF] to-[#A5C0EE] rounded-lg overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/12069bfd8a03ad9cf69791881b2e926554a8f538?width=1260"
                  alt="Regulated market infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-3">
                <p className="text-brand-blue text-xs md:text-sm font-semibold">
                  Compliant markets, verified participants
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  KYC-anchored tokenized markets
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Operate in private, compliant trading environments where
                  participants are verified, rules are enforced by code, and
                  trades are provable without revealing identities. Prividium's
                  programmable privacy allows selective disclosure to regulators
                  or partners, preserving confidentiality where it matters most.{" "}
                  <strong>Outcome:</strong> compliant market infrastructure
                  ready for digital securities, carbon credits, or interbank
                  trading.
                </p>
                <a
                  href="#"
                  className="text-brand-blue-dark text-sm font-semibold underline inline-block"
                >
                  Learn how Prividium keeps data private ➔
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={800}
              className="flex gap-4 md:gap-5 items-center flex-col-reverse lg:flex-row"
            >
              <div className="w-full lg:w-1/2 space-y-3">
                <p className="text-brand-blue text-xs md:text-sm font-semibold">
                  Secure cross-chain financial products
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Atomic swaps and cross-chain finance between institutions
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Enable instant, risk-free exchange of tokenized assets between
                  institutions, without intermediaries or reconciliation delays.
                  Zero-knowledge proofs validate every trade while preserving
                  counterparty confidentiality. <strong>Outcome</strong>: near
                  real-time settlement, improved liquidity management, and full
                  operational integrity.
                </p>
                <a
                  href="#"
                  className="text-brand-blue-dark text-sm font-semibold underline inline-block"
                >
                  Learn how Prividium keeps data private ➔
                </a>
              </div>
              <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#BFEAFF] to-[#A5C0EE] rounded-lg overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/842cd09bd1f9637bc4f977111f6517373855be28?width=1240"
                  alt="Interbank liquidity"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={1000}
              className="flex gap-4 md:gap-5 items-center flex-col lg:flex-row"
            >
              <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#BFEAFF] to-[#A5C0EE] rounded-lg overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e43a2d5e8bf9a40740c3e1700ae06a4f9c6b1f07?width=1240"
                  alt="Intraday financing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <p className="text-brand-blue text-xs md:text-sm font-semibold">
                  Real-time intraday liquidity
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-9">
                  Intraday repo and secured financing
                </h3>
                <p className="text-sm md:text-base text-black leading-6">
                  Automate intraday repo, margin management, and secured funding
                  on private rails that settle with public finality. Each
                  transaction remains confidential but provably correct,
                  reducing friction and freeing working capital.{" "}
                  <strong>Outcome:</strong> increased liquidity efficiency,
                  minimized settlement risk, and transparent auditability.
                </p>
                <a
                  href="#"
                  className="text-brand-blue-dark text-sm font-semibold underline inline-block"
                >
                  Learn how Prividium keeps data private ➔
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <svg
          className="absolute right-0 top-0 w-[2113px] h-[1403px] opacity-50"
          viewBox="0 0 1501 1403"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M0 0H2113V1402.71L0 0Z"
            fill="url(#paint0_linear_faq)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_faq"
              x1="0"
              y1="701.356"
              x2="2113"
              y2="701.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#98B6FE" />
              <stop offset="1" stopColor="#98B6FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark-text mb-3 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-sm md:text-base text-black mb-8 md:mb-12">
              Everything you need to know about Prividium.
            </p>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1e972e6bff3b06e15523e44481977d8d092137d1?width=2128"
              alt="FAQ accordion"
              className="w-full h-auto"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-brand-gray py-16 md:py-24 px-4 md:px-8 overflow-hidden"
      >
        <svg
          className="absolute left-0 bottom-0 w-[625px] h-[761px] opacity-50"
          viewBox="0 0 761 625"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M-6.10352e-05 0V625H760.969L-6.10352e-05 0Z"
            fill="url(#paint0_linear_contact)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_contact"
              x1="380.484"
              y1="0"
              x2="380.484"
              y2="625"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#98B6FE" />
              <stop offset="1" stopColor="#98B6FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <ScrollReveal className="rounded-lg overflow-hidden mb-8 md:mb-12">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9d6a5954c2b9bf6bbd17c43b13bb9416ca8d81e4?width=2560"
              alt="Contact section background"
              className="w-full h-auto"
            />
          </ScrollReveal>

          <ScrollReveal
            delay={200}
            className="flex gap-6 md:gap-8 lg:gap-16 items-stretch flex-col lg:flex-row"
          >
            <div className="w-full lg:w-1/3 space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-tight md:leading-[52px]">
                Talk to an expert
              </h2>
              <p className="text-sm md:text-base text-brand-dark-text leading-7">
                Deploy Prividium with confidence. Keep data private, stay
                compliant, and anchor to Ethereum for unmatched security.
              </p>
            </div>
            <div className="w-full lg:w-2/3 bg-white rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="First and last name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Title (Optional)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white font-semibold py-3 px-4 rounded-full hover:bg-brand-blue/90 transition-colors text-sm md:text-base"
                  >
                    Submit
                  </button>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  By submitting this form you agree with the{" "}
                  <a href="#" className="underline hover:text-brand-blue">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
