document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAir', function () {
        return {
            airtimeUsage: '',
            availableAmount: '0.00',
            airtimeMessage: '',
            calculate(){
               this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount)
            }
           
        }
    });  
       
})