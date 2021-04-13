import { connect } from 'react-redux';
import { ResultContainer, HeadingParagraph, DescriptionParagraph } from './TestResult.style';
import { getResult } from '../../redux/test/testSelectors';

function TestResult({ correctAnswers, incorrectAnswers }) {
  const totalAnswers = correctAnswers + incorrectAnswers;

  const RESULTS = [
    { heading: 'Perfect!', description: 'You know material very well!' },
    { heading: 'Not bad!', description: 'But you still need to learn some materials.' },
    { heading: 'Satisfactorily.', description: 'You still need to learn some materials.' },
    { heading: 'Bad.', description: 'You need to repeat all material!' },
    { heading: 'Very bad!', description: 'You need to repeat all material!' },
  ];

  function calculateTestResult(correct, total) {
    const correctPercent = correct / total;

    if (correctPercent <= 0.2) return RESULTS[4];
    else if (correctPercent > 0.2 && correctPercent <= 0.4) return RESULTS[3];
    else if (correctPercent > 0.4 && correctPercent <= 0.6) return RESULTS[2];
    else if (correctPercent > 0.6 && correctPercent <= 0.8) return RESULTS[1];
    else return RESULTS[0];
  }

  const result = calculateTestResult(correctAnswers, totalAnswers);

  return (
    <ResultContainer>
      <HeadingParagraph>{result.heading}</HeadingParagraph>
      <DescriptionParagraph> {result.description}</DescriptionParagraph>
    </ResultContainer>
  );
}

const mapStateToProps = state => ({
  correctAnswers: getResult(state).correct,
  incorrectAnswers: getResult(state).wrong,
});

export default connect(mapStateToProps, null)(TestResult);
