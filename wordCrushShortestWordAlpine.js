document.addEventListener('alpine:init', () => {
    Alpine.data('shortWidget', function () {
        return {
            sentence:'',
            Message: '',
            calculate2(){
            this.Message = shortestWord(this.sentence);
            
           }
        }
    });  
       
})