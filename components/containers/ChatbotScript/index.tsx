import Script from 'next/script'

const ChatbotScript = () => {
	return (
		<>
			<Script
				id="salesmate-chat-config"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
        window.salesmateSettings = {
          workspace_id: "9ad7dbe7-dede-4676-b389-795db18011e4", 
					app_key:"34eb5b60-ca1c-11f0-b714-1ffbf3da670c", 
					tenant_id:"americansm.salesmate.io", 
					channel_id:"947cba77-ac33-4d8b-8876-874bed676f5b", 
					widget_style:"floating"
        }
        `,
				}}
			/>
			<Script
				id="salesmate-chat"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
          !function(e,t,a,i,d,n,o){e.Widget=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement(a),o=t.getElementsByTagName(a)[0],n.id=i,n.src=d,window._salesmate_widget_script_url=d,n.async=1,o.parentNode.insertBefore(n,o)}(window,document,"script","loadwidget", "https://americansm.salesmate.io/messenger-platform/messenger-platform-main.js"),loadwidget("init",{}),loadwidget("load_widget","Widget Loading...!");
        `,
				}}
			/>
		</>
	)
}

export default ChatbotScript
