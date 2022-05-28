import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const options = ['good', 'neutral', 'bad'];
function App() {
  const [good, SetGood] = useState(0);
  const [bad, SetBad] = useState(0);
  const [neutral, SetNeutral] = useState(0);

  const handleClick = event => {
    const name = event;
    console.log(name);
    switch (name) {
      case 'good':
        SetGood(item => item + 1);
        break;
      case 'bad':
        SetBad(item => item + 1);
        break;
      case 'neutral':
        SetNeutral(item => item + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();
  // console.log(total);
  const countPositiveFeedback = () => {
    return Number(((good / countTotalFeedback()) * 100).toFixed());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {!total && <Notification message="There is no positive feedback" />}
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        )}
      </Section>
    </>
  );
}

export default App;

// class App extends Component  {

//    static defaultProps = {
//     options: ['good', 'neutral', 'bad'],
//   };

//   state = {
// good: 0,
// neutral: 0,
//     bad: 0,

//   }

//   handleClick = (propertyName) => {
//         this.setState(prevState => {
//       return {
//         [propertyName]: prevState[propertyName] + 1,
//       };
//     });
//   }

//    countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//    }

//     countPositiveFeedback() {
//     const { good } = this.state;
//     return Number(((good / this.countTotalFeedback()) * 100).toFixed());
//   }

//   render() {
//     const { good, neutral, bad} = this.state;
//     const { options } = this.props;
//     const { handleClick } = this;

//     const total = this.countTotalFeedback();

//       return (<>
//         <Section title="Please leave feedback">
//          <FeedbackOptions options={options} onLeaveFeedback={handleClick}></FeedbackOptions>
//           </Section>
//           <Section title="Statistic">
//            {!total && <Notification message="There is no positive feedback" />}
//           {total > 0 && (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedback()}
//             />
//           )}
//         </Section>
//       </>  )
//   }
// }
