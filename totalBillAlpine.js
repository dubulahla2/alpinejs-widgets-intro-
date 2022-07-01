document.addEventListener('alpine:init', () => {
    Alpine.data('billWidget', function () {
        return {
            airtimeUsage: '',
             airtimeMessage: '',
             calculate1(){
             this.airtimeMessage = totalPhoneBill(this.airtimeUsage)
          }
        }
    });  
       
})