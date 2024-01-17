import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { addTodo } from '../../redux/action';
import { todosRemainingSelector } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(todosRemainingSelector)

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: v4(),
      name: input,
      prioriry: priority,
      completed: false
    }))

    setInput('')
    setPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={(value) => {setPriority(value)}}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
