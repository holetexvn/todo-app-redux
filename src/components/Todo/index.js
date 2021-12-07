import { Row, Tag, Checkbox, Input } from 'antd';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry }) {
  return (
    <Row justify='space-between' style={{ marginBottom: 3 }}>
      <Checkbox>{name}</Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
