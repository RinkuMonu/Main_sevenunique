import { ChevronRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r  text-white py-16"style={{
      backgroundImage: "url(/image/2151896822.jpg)",
        backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"
      
    }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
            Collect customer payments, make payouts, manage international payments and so much more. Create your account
            or contact our experts to explore custom solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-[#ab6545] py-3 px-8 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              Create Account
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="border border-white/50 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              Contact Sales
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
