document.addEventListener('alpine:init', () => {
    Alpine.data('longestWidget', function () {
        return {
            sentence:'',
            Message: '',
            calculate3(){
            this.Message = longestword(this.sentence);
            
           }
        }
    });  
       
})