import { useState, useEffect } from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import testActions from '../../redux/test/testActions';
import { fetchTest, sendAnswers } from 'redux/test/testOperations';
import * as selectors from '../../redux/test/testSelectors';

import Card from './Card';
import Modal from './Modal';
import { ReactComponent as PrevSvg } from '../../images/prev.svg';
import { ReactComponent as NextSvg } from '../../images/next.svg';

import s from './Test.module.css';
// import styled from 'styled-components';

export default function Test({ title }) {
  const [open, setOpen] = useState(false);

  const answers = useSelector(selectors.getAnswers);
  const questions = useSelector(selectors.getQuestions);
  const category = useSelector(selectors.getCategory);
  // const result = useSelector(selectors.getResult);
  const activeCard = useSelector(selectors.getActiveCard);
  const dispatch = useDispatch();

  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();
  const isRender = questions.length;
  const categories = { theory: '[Теория тестирования_]', tech: '[Техническое тестирования_]' };

  // console.log(location)

  useEffect(() => {
    console.log('h');
    if (location.pathname !== '/test') {
      console.log(location.pathname);
      setOpen(true);
    }
  }, [location]);

  useEffect(() => {
    if (category === '[Теория тестирования_]') {
      dispatch(testActions.addCategory(categories.theory));
      dispatch(fetchTest('/test-theory'));
      return;
    }
    dispatch(testActions.addCategory(categories.tech));
    dispatch(fetchTest('/test-tech'));
  }, []);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  function handleClickCancel() {
    closeModal();
    dispatch(testActions.testRefresh());
    history.push('/');
  }
  function handleClickContinue() {
    closeModal();
  }

  const handlePrev = () => {
    dispatch(testActions.addActiveCard(activeCard - 1));
  };
  const handleNext = () => {
    dispatch(testActions.addActiveCard(activeCard + 1));
  };
  const handleAnswer = targerAnswer => {
    dispatch(testActions.addAnswer(targerAnswer));
  };

  function transformAnswers(answers) {
    const entries = Object.entries(answers);
    return entries.map(([id, answer]) => ({ questionId: Number(id), answer }));
  }
  const handleFinishTest = () => {
    const readyAnswers = transformAnswers(answers);
    if (questions.length === readyAnswers.length) {
      dispatch(sendAnswers(readyAnswers));
      history.push('/results');
      return;
    }
    openModal();
  };

  return (
    <>
      <section className={s.section}>
        <Modal
          open={open}
          onClose={closeModal}
          onCancel={handleClickCancel}
          onContinue={handleClickContinue}
        />
        <div className={s.above}>
          <h2 className={s.title}>{title ? title : category}</h2>
          <button className={s.aboveButton} type="button" onClick={handleFinishTest}>
            Завершить тест
          </button>
        </div>
        {isRender && (
          <Card
            questions={questions}
            activeCard={activeCard}
            handleAnswer={handleAnswer}
            answered={answers}
          />
        )}
        <div className={s.buttons}>
          <button
            className={s.btn}
            type="button"
            onClick={handlePrev}
            disabled={activeCard - 1 === 0}
          >
            <PrevSvg />
            <span>Предыдущий вопрос</span>
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={handleNext}
            disabled={activeCard + 1 > questions.length}
          >
            <span>Следующий вопрос</span>
            <NextSvg />
          </button>
        </div>
      </section>
    </>
  );
}
