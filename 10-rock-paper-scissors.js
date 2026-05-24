 //jo score mein store kiya tha voh string thi json ki toh usse vaapis object mein convert kr diya kyuki value store krne k liye JSON use krte h   
        let score= JSON.parse(localStorage.getItem('score')) ||  //if score===null mtlb reset hone p
        {
            wins:0,
            losses:0,
            ties:0
            };
       //updating score element
       updateScoreElement();
        //taking the random variable and your pick and finding who won
        function playGame(playerMove){
            const compMove= pickComputerMove();
            let result='';

        if (playerMove === 'scissors'){
                if (compMove ==='rock'){
                result = 'You lost !';
                }
                else if (compMove ==='paper'){
                result= 'You won !';
                }
                else {
                result= 'Tie';
                }
        }

        if(playerMove==='rock'){
             if (compMove ==='rock'){
            result = 'Tie';
            }
            else if (compMove ==='paper'){
                result= 'You lost !';
            }
            else {
                result= 'You won !';
            }
           
        }
            
        if(playerMove==='paper'){
            if (compMove ==='rock'){
        result = 'You won !';
        }
        else if (compMove ==='paper'){
            result= 'Tie';
        }
        else {
            result= 'You lost !';
        }
        }

        //score update 
        if (result ==='You won !'){
            score.wins += 1;
        }else if(result==='You lost !'){
            score.losses +=1;
        }else score.ties +=1; 

        //ab result update krne k baad usse local storage mein store krnege taaki refresh krne p scores khud reset na ho jae
        localStorage.setItem('score',JSON.stringify(score));//here score object ko json string mein bdlke store kiya kyuki to store data use string also setitem string accept krta h 
        updateScoreElement(); //updating the score element

         document.querySelector('.js-result')
        .innerHTML = result;

        document.querySelector('.js-moves')
        .innerHTML= ` You
    <img src="images/${playerMove}.png"
    class="move-icon">
    <img src="images/${compMove}.png" class="move-icon">
    Computer`;
        }
    
        //function for updating the score element in the js-score 
        function updateScoreElement(){
        //updating score on the page
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`;
        }
    //picking xomputer move     
    function pickComputerMove(){
        const randomNumber = Math.random();
          let  compMove ='' ;
            let result ='';
            if(randomNumber>=0 && randomNumber<1/3){
                compMove = 'rock';
            } 
            else if(randomNumber>=1/3 && randomNumber<2/3){
            compMove ='paper';}

            else {
                compMove ='scissors';}
             return compMove;
        }