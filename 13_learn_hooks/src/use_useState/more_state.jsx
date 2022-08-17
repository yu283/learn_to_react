import React, {useState} from 'react';

function MoreState(props) {
  const [counter, setCounter] = useState(1)
  const [age, setAge] = useState(100);
  const [friends, setFriends] = useState(['cabi', 'lili']);
  const [students, setStudents] = useState([
    {id: 1,name:'rhy1',age:12},
    {id: 2,name:'rhy2',age:13},
    {id: 3,name:'rhy3',age:14},
    {id: 4,name:'rhy4',age:15}
  ]);

  const agePP = (index) => {
    const newStu = [...students]
    newStu[index].age += 1
    setStudents(newStu)
  }
  return (
    <div>
      <h2>{counter}</h2>
      <h2>{age}</h2>
      <ul>{
        friends.map((value, index, array) => {
            return <li key={index}>{value}</li>
        })
      }</ul>
      <button onClick={event => setFriends([...friends,'tom'])}>增加朋友</button>
      <h2>学生列表</h2>
      <ul>
        {
          students.map((value, index, array) => {
              return <li key={value.id}>
                <span>{value.name}</span>
                <span>==========</span>
                <span>{value.age}</span>
                <button onClick={event => agePP(index)}>age+1</button>
              </li>
          })
        }
      </ul>
    </div>
  );
}

export default MoreState;
