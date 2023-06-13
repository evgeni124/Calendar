import { FC, useCallback, useState } from 'react';
import { endOfMonth, startOfMonth, differenceInDays, sub, add, format } from 'date-fns';
import { styled } from 'styled-components';
import Cell from '../Cell/Cell';

const AddButton = styled.button`
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #BF4F74;
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 760px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`
const Control = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const ControlButton = styled.button`
    background: none;
    border: none;
    color: #BF4F74;
    font-size: 21px;  
    &:hover {
        cursor: pointer;
    }
`
const Container = styled.div`
    margin-left: 40px;
`

const days: string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const months: string[] = ["January","February","March","April","May","June","July",
"August","September","October","November","December"]


const EventCalendar: FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date()) 
    const startMonth = startOfMonth(currentDate)
    const endMonth = endOfMonth(currentDate)
    const difference = differenceInDays(endMonth, startMonth) + 1
    const getDayIndex = startMonth.getDay() - 1
    const currentDay = currentDate.getDate()

    // const [walkedMonths, setWalkedMonths] = useState<number[]>([])
    // const walkedMonths: number[] = []

    const events = []

    const prevMonth = () => {
        setCurrentDate(sub(currentDate, { months: 1 }))
    }

    const nextMonth = () => {
        setCurrentDate(add(currentDate, { months: 1 }))
    }

    const drawGrid = () => {}

    return (
        <Wrapper>
            <Container>
                <Header>
                    <h2>Calendar</h2>
                    <AddButton>+</AddButton>
                </Header>
                <Grid>
                    { days.map((day, index) => <Cell className='cell' key={index}>{ day }</Cell>)}
                    
                    { Array.from({length: getDayIndex}).map((_, index) => <Cell key={index}/>)}
                    { Array.from({length: difference}).map((_, index) => {
                        const number = index + 1
                        
                        return <Cell 
                        key={number}
                        className={number === currentDay ? 'cell-active' : 'cell'}
                        >
                            {number}
                        </Cell>
                    })}
                </Grid>
                <Control>
                    <ControlButton onClick={prevMonth}>{"<"}</ControlButton>
                    <p>{format(currentDate, 'LLLL yyyy')}</p>
                    <ControlButton onClick={nextMonth}>{">"}</ControlButton>
                </Control>
            </Container>
            <div style={{position: 'relative'}}>
                <div style={{width: '95%', 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(7, 1fr)', 
                    gridTemplateRows: 'repeat(24, 1fr)',
                    marginLeft: 40
                }}>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                    <p className="event"></p>
                </div>
                <div style={{position: 'absolute', top: 1}}>
                    <p>00:00</p>
                    <p>01:00</p>
                    <p>00:00</p>
                    <p>01:00</p>
                    <p>00:00</p>
                    <p>01:00</p>
                    <p>00:00</p>
                    <p>01:00</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default EventCalendar

