import React, { Component } from 'react';
import '../style.css';

class Quote extends Component {

   randomize(input) {
    let quotes = ['"Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible." - Francis of Assisi', '"Start with good people, lay out the rules, communicate with your employees, motivate them and reward them. If you do all those things effectively, you can’t miss." – Lee Iacocca', '"The way to get started is to quit talking and begin doing." – Walt Disney',
    '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it." – Steve Jobs', '"Sometimes, things may not go your way, but the effort should be there every single night." – Michael Jordan',
    '"He who is not courageous enough to take risks will accomplish nothing in life." – Muhammad Ali', '"Learning never exhausts the mind." – Leonardo da Vinci',
    '"Obstacles are those frightful things you see when you take your eyes off your goal." – Henry Ford', '"Work gives you meaning and purpose and life is empty without it." – Stephen Hawking',
    '"Hard work beats talent when talent doesn’t work hard."- Tim Notke',
    '"A man can be as great as he wants to be. If you believe in yourself and have the courage, the determination, the dedication, the competitive drive and if you are willing to sacrifice the little things in life and pay the price for the things that are worthwhile, it can be done." - Vince Lombardi',
    '"Failure will never overtake me if my determination to succeed is strong enough." - Og Mandino',
    '"Success… seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit." - Conrad Hilton',
    '"Aim for the moon. If you miss, you may hit a star." - W. Clement Stone',
    '"Action is the foundational key to all success." - Pablo Picasso',
    '"Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier, wish you were better." - Jim Rohn',
    '"The question isn’t who is going to let me; it’s who is going to stop me." - Ayn Rand',
    '"It does not matter how slowly you go, so long as you do not stop." - Confucius',
    '"Little minds are tamed and subdued by misfortune; but great minds rise above it." - Washington Irving',
    '"I find that the harder I work, the more luck I seem to have." - Thomas Jefferson',
    '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover." - Mark Twain',
    '"You don’t have to be great to start, but you have to start to be great." - Zig Ziglar',
    '“The Way Get Started Is To Quit Talking And Begin Doing.” -Walt Disney',
    '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.” -Winston Churchill',
    '“Don’t Let Yesterday Take Up Too Much Of Today.” -Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”- Unknown',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”- Vince Lombardi',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”- Steve Jobs',
    '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”- Rob Siltanen',
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”- Og Mandino',
    '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.”- Mohnish Pabrai',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.”- Maya Angelou'

    ]
    let i = Math.floor(Math.random() * 32)
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

