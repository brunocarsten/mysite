var scriptExecuted = false

function executeGtagScript() {
  if (!scriptExecuted) {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-32D74FB9R7')
    scriptExecuted = true
  }
}

window.addEventListener('scroll', executeGtagScript)
