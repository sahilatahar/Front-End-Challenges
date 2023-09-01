import { useEffect, useRef, useState } from 'react';
import './MultiSelect.scss';
import { technologiesAndTools as Tools } from '../../data/technologiesAndTools';

const MultiSelect = () => {

    const [suggestionList, setSuggestionList] = useState(Tools.slice(0, 5));
    const [selectedTags, setSelectedTags] = useState([]);
    const inputRef = useRef(null);

    const filterSuggestion = () => {
        let text = inputRef.current.value;
        let filteredList = Tools.filter(item => item.toLowerCase().includes(text.toLowerCase()) && !selectedTags.includes(item));
        if (filteredList.length > 5) {
            filteredList = filteredList.splice(0, 5);
        }
        setSuggestionList(filteredList);
    }

    const handleRemoveTag = (item) => {
        const tagList = [...selectedTags];
        const index = tagList.indexOf(item);
        if (index > -1) {
            tagList.splice(index, 1);
            setSelectedTags(tagList);
        }
    }

    const handleAddTag = (item) => {
        inputRef.current.value = '';
        setSelectedTags(() => [...selectedTags, item]);
    }

    useEffect(() => {
        filterSuggestion();
    }, [selectedTags]);


    const handleInputBackSpace = (e) => {
        if (inputRef.current.value.length > 0) return;

        const { key } = e;
        if (key === "Backspace") {
            let newList = [...selectedTags];
            newList.pop();
            setSelectedTags(newList);
        }
    }

    const handleAllClear = () => {
        inputRef.current.value = '';
        setSelectedTags([]);
    }

    useEffect(() => {
        inputRef.current.addEventListener('keydown', handleInputBackSpace);

        return () => inputRef.current.removeEventListener('keydown', handleInputBackSpace);
    });

    return (
        <div className='MultiSelect'>
            <h2>Multi Select Search</h2>
            <div className="tags-input">
                {selectedTags.map((item, index) => <Tag item={item} key={index} handleRemoveTag={handleRemoveTag} />)}
                <input type="text" onChange={filterSuggestion} ref={inputRef} size={1} />
                {selectedTags.length > 0 && <Button onClick={handleAllClear} bgColor='#ffffff' />}
            </div>
            <div className="Suggestion__list">
                {suggestionList.length > 0 ? suggestionList.map((item, index) => {
                    return <div className="Suggestion__item" key={index} onClick={() => handleAddTag(item)}>
                        {item}
                    </div>
                }
                ) : (inputRef.current.value.length > 0 && <div className="Suggestion__item" onClick={() => handleAddTag(inputRef.current.value)}>
                    {inputRef.current.value}
                </div>)}
            </div>
        </div>
    )
}

export default MultiSelect

export const Tag = ({ item, handleRemoveTag }) => {

    return (
        <span className='Tag'>
            <span>{item}</span>
            <Button onClick={() => handleRemoveTag(item)} bgColor='#edeffb' />
        </span>
    )
}


const Button = ({ onClick, bgColor }) => {
    return (
        <button onClick={onClick} className='Button' style={{ backgroundColor: bgColor }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
        </button>
    )
}