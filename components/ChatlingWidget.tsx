import Script from "next/script";

const CHATBOT_ID = "6758214896";

export default function ChatlingWidget() {
  return (
    <>
      <Script id="chtl-config" strategy="afterInteractive">
        {`window.chtlConfig = { chatbotId: "${CHATBOT_ID}" };`}
      </Script>
      <Script
        id="chtl-script"
        src="https://chatling.ai/js/embed.js"
        data-id={CHATBOT_ID}
        strategy="afterInteractive"
      />
    </>
  );
}
