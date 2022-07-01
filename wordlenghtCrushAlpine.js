document.addEventListener('alpine:init', () => {
    Alpine.data('lengthWidged', function () {
        return {
            sentence:'',
            Message: '',
            calculate2(){
            this.Message = wordLengths(this.sentence);
            
           }
        }
    });  
       
})