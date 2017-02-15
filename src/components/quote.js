import React, { Component } from 'react';
import '../style.css';

class Quote extends Component {

   randomize(input) {
    let quotes = ['"Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible." - Francis of Assisi', '"Start with good people, lay out the rules, communicate with your employees, motivate them and reward them. If you do all those things effectively, you can’t miss." – Lee Iacocca', '"The way to get started is to quit talking and begin doing." – Walt Disney',
    '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it." – Steve Jobs', '"Sometimes, things may not go your way, but the effort should be there every single night."" – Michael Jordan',
    '"He who is not courageous enough to take risks will accomplish nothing in life. – Muhammad Ali"', '"Learning never exhausts the mind." – Leonardo da Vinci',
    '"Obstacles are those frightful things you see when you take your eyes off your goal." – Henry Ford', '"Work gives you meaning and purpose and life is empty without it." – Stephen Hawking']
    let i = Math.floor(Math.random() * 9)
    let putquote = quotes[i]
    return(
      <div className='quotes'>
        <p> { putquote } </p>
      </div>
      )
    }


    render(){
    return (
      <div>
       { this.randomize() }
      </div>
      )}
}


export default Quote;
