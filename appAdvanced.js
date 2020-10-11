// /*After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

// 9) Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

// 10) Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you dont have to, just do this with the tools you feel more comfortable at this point). 

// 11) Display the score in the console. Use yet another method for this. */

// (function(){
//     var Questions = function (questionAsked, answers, correct){
//         this.questionAsked = questionAsked;
//         this.answers = answers;
//         this.correct = correct;
//     }
    
//     Questions.prototype.qDisplayed = function(){
//         console.log(this.questionAsked);
    
//         for(var i=0; i<this.answers.length; i++){
//         console.log( i +" " + this.answers[i]);
//         }
//     }
    
//     Questions.prototype.isCorrect = function(){
//         if(guess === this.correct){
//             console.log("That is correct!")
//         }else if (guess!== 'exit' && guess!== this.correct{
//             console.log("Guess again!")
//         }else{
//             finish Game();
//         }
//     }
    
//     var q1 = new Questions("What language is this quiz made in?", ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Pyhton', 'Java'], 2);
//     var q2 = new Questions("What is my name?", ['Maya', 'Ccoc', 'Jessica', 'Mie-Mie', 'Patricia', 'Jannet'], 0);
//     var q3 = new Questions("What is my dream job?", ['Astonaut', 'Snowboarder', 'Coder', 'Dog Walker', 'Doctor', 'Nanny'], 2);
//     var q4 = new Questions("How old am I?", [20, 21, 22, 23, 24, 25], 4);
//     var q5 = new Questions("Whats my favourite coding language?", ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Pyhton', 'Java'], 1);
//     var q6 = new Questions("What company do I teach lessons for?", ['Code First Girls', 'CSS- Tutors', 'Udemy', 'Skillshare', 'T-you-tors', 'Java Juniors'], 0);
//     var q7 = new Questions("What was my little cat called?", ['Hudini', 'Coco', 'Jippee', 'Mysty', 'Pipo', 'Jess'], 1);
//     var q8 = new Questions("What is my cats best friend called?", ['Hudini', 'Coco', 'Jippee', 'Mysty', 'Pipo', 'Jess'], 0);
//     var q9 = new Questions("What is my bestfriend called?", ['Nathan', 'Claudia', 'Jessica', 'Martha', 'Pete', 'Juliette'], 3);
//     var q10 = new Questions("How tall am I?", ['5\'4', '5\'5', '5\'6', '5\'7', '5\'8', '5\'9'], 1);
    
//     var qAll= [q1, q2, q3, q4, q5, q6, q7, q8,q9,q10];
    
//     var n = Math.floor(Math.random()*qAll.length);
    
//     var qRandom = qAll[n];
    
//     qRandom.qDisplayed();
    
//     var guess = parseInt(prompt("What number is correct?"));
    
//     qRandom.isCorrect();
    
//     })();