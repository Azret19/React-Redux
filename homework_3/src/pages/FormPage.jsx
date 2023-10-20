import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

const FormPage = () => {
    const name = useSelector((state) => state.name)
    const age = useSelector((state) => state.age)
    const gender = useSelector((state) => state.gender)
    const [userName, setName] = useState('')
    const [userAge, setAge] = useState(0)
    const [userGender, setGender] = useState('')

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: "USER", payload: {name: userName, age: userAge, gender: userGender}
        })

        setName('')
        setAge(0)
    }
    return (
        <div>
            <span>Страница пользователя</span>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder='Имя пользователя'
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input
                    type='number'
                    placeholder='Возраст пользователя'
                    value={userAge}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br/>
                <select
                    value={userGender}
                    onChange={(e)=> setGender(e.target.value)}
                >
                    <option value="">Выбрать пол</option>
                    <option value="Мужчина">Мужчина</option>
                    <option value="Женщина">Женщина</option>
                </select>
                <br/>
                <button type="submit">Сохранить</button>
            </form>
            <div>
                <span>Имя: {name}</span>
                <br/>
                <span>Возраст: {age}</span>
                <br/>
                <span>Пол: {gender}</span>
            </div>
        </div>
    )
}

export default FormPage

