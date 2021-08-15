import React from 'react'
import Question from './Question'
import './Questions.css'

const Data = [
    {
        id: 1,
        question: 'Are we alone in absorvable univers?',
        answer: 'yes, it seems we are alone in absorvable univers'
    },
    {   
        id:2,
        question:'what is reason that we are alone?',
        answer: 'the reason we are alon must be The great filter'
    },
    {
        id:3,
        question:"what is great filter?",
        answer:"creat filter is barier, which interputs civilization to born or stay alive and leave their planet or solar system"
    },
    {
        id: 4,
        question: 'Is great filter waiting for us',
        answer: 'well it may be its waiting for us  or if we are lucky we may already passed great filter'
    }

]



const QuestionsDisplay = () => {
    return (
       <div className="Container">
           <div className='ContentCont'>
                <div className='TitleCont'>
                    <div style={{fontSize:"30px"}}>
                            Questions And <br/> Answers About <br/> Univers
                    </div>
                </div>
                <div className='AccordionCOnt'>
                    {
                        Data.map((question)=>{
                            
                            return(
                                <Question id={question.id} Question={question.question} Text={question.answer} />
                            )
                        })
                    }
                </div>
           </div>
       </div>
    );
}

export default QuestionsDisplay