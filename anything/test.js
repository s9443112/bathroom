var min = 0;
var max = 1;
var true_on = 0;
var false_down = 0;
var many_time = 100;
var many_team = 100;
var true_on_many = [];
var false_down_many = [];

function getRandomArbitrary(min, max) {
    for(i=0;i<100;i++){
        true_on_many[i]=0;
        false_down_many[i]=0;
    }


    for(i=0;i<100;i++){

        while (many_time--) {
            var number = Math.random() * (max - min) + min;
            //console.log(number);
            if (number >= 0.5) {
                true_on = true_on + 1;
                //console.log("true_on++");
            } else {
                false_down = false_down + 1;
                //console.log("false_down++");
            }
            //console.log();
            
        }
        true_on_many[true_on]++;
        false_down_many[false_down]++;
        console.log("true_on[" + true_on + "]is : " + true_on_many[true_on]);
        console.log("false_down[" + false_down + "]is : " + false_down_many[false_down]);
        
        console.log('====');
        true_on = 0;
        false_down = 0;
        many_time = 100;
    }
    console.log('------------');
    for (i = 0; i < 100; i++) {
        //console.log(i);
        console.log("true_on[" + i + "]is : " + true_on_many[i]);
        console.log("false_down[" + i + "]is : " + false_down_many[i]);

    }

}


getRandomArbitrary(min, max);

