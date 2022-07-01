document.addEventListener('alpine:init', () => {
    Alpine.data('lengthWidget', function () {
        return {
            sentence:'',
            Message: '',
            calculate2(){
            this.Message = wordLengths(this.sentence);
            
           }
        }
    });  
       
})