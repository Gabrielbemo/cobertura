class ClasseTest {

    teste(arg, tam){
        if(arg){
            for (let index = 0; index < tam.length; index++) {
                console.log(index);
            }
            return !arg;
        }else{
            return arg;
        }
    }
}

module.exports = ClasseTest;