import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';
import Question from './Question';
import { ShareContainer } from '../Share';
import Conclusion from './Conclusion';
import './quiz.scss';

const Quiz = ({ id, fields, data, completeQuiz, pickQuizAnswer }) => (
  <div className="quiz">
    <div className="quiz__introduction">
      <h1 className="quiz__title">Quiz</h1>
      <h2 className="quiz__subtitle">{fields.title}</h2>
      {data.shouldSeeResult ? null : (
        <Markdown className="quiz__description">{fields.introduction}</Markdown>
      )}
    </div>
    {data.shouldSeeResult ? null : (fields.questions).map(question => (
      <Question
        key={question.id}
        pickQuizAnswer={pickQuizAnswer}
        quizId={id}
        activeAnswer={data.questions ? data.questions[question.id] : null}
        {...question}
      />
    ))}
    { data.error ? <p className="quiz__error">{data.error}</p> : null }
    { ! data.shouldSeeResult ? (
      <Conclusion callToAction={fields.callToAction}>
        <button
          onClick={() => completeQuiz(id)}
          className="button quiz__submit"
        >get results</button>
      </Conclusion>
    ) : null}
    { data.shouldSeeResult ? (
      <Conclusion callToAction={fields.conclusion}>
        <ShareContainer
          className="quiz__share"
          parentSource="quiz"
        />
      </Conclusion>
    ) : null }
  </div>
);

Quiz.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    introduction: PropTypes.string,
    conclusion: PropTypes.string,
    comparison: PropTypes.string,
    callToAction: PropTypes.string,
    questions: PropTypes.array,
  }).isRequired,
  data: PropTypes.shape({
    shouldSeeResult: PropTypes.bool,
    questions: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  completeQuiz: PropTypes.func.isRequired,
  pickQuizAnswer: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
  data: {
    shouldSeeResult: false,
    questions: {},
    error: null,
  },
  fields: {
    introduction: '',
    questions: [],
    conclusion: '',
    comparison: '',
    callToAction: '',
  },
};

export default Quiz;
