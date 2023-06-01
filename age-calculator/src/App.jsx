import React, { useState } from "react";
import arrowIcon from "./images/icon-arrow.svg";
import './App.css';

function App() {

  const [DOB, setDOB] = useState({ day: 0, month: 0, year: 0 });
  const [age, setAge] = useState({ days: '--', months: '--', years: '--' });
  const [errorMsg, setErrorMsg] = useState({ day: '', month: '', year: '' });

  const onInput = (event) => {
    setDOB((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value
      }
    });
  }

  function calculateAge() {
    var today = new Date();
    var birthDate = new Date(DOB.year, DOB.month - 1, DOB.day);

    var years = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    var dayDiff = today.getDate() - birthDate.getDate();

    // Check if the birth month and day are yet to come in this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      monthDiff += 12;
    }

    // Check if the birth day is in the future this month
    if (dayDiff < 0) {
      monthDiff--;
      var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, DOB.day);
      dayDiff = Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24));
    }

    // Adjust negative month difference
    if (monthDiff < 0) {
      monthDiff += 12;
    }

    setAge({
      years: years.toString(),
      months: monthDiff.toString(),
      days: dayDiff.toString()
    });
  }


  const isValidDate = (event) => {
    var today = new Date();

    if (!DOB.day) {
      setErrorMsg((pre) => {
        return {
          day: "This field is required",
          month: '',
          year: ''
        }
      });
      return false;
    }

    if (!(DOB.day >= 1 && DOB.day <= 31)) {
      setErrorMsg((pre) => {
        return {
          day: "Must be a valid day",
          month: '',
          year: ''
        }
      });
      return false;
    }

    if (!DOB.month) {
      setErrorMsg((pre) => {
        return {
          day: '',
          month: "This field is required",
          year: ''
        }
      });
      return false;
    }

    if (!(DOB.month >= 1 && DOB.month <= 12)) {
      setErrorMsg((pre) => {
        return {
          day: '',
          month: "Must be a valid month",
          year: ''
        }
      });
      return false;
    }


    if (!DOB.year) {
      setErrorMsg((pre) => {
        return {
          day: '',
          month: '',
          year: "This field is required"
        }
      });
      return false;
    }

    if (DOB.year >= today.getFullYear()) {
      setErrorMsg((pre) => {
        return {
          day: '',
          month: '',
          year: 'Must be in past'
        }
      });
      return false;
    }

    let daysInMonth = new Date(DOB.year, DOB.month, 0).getDate();

    if (DOB.day > daysInMonth) {
      setErrorMsg((pre) => {
        return {
          day: "Must be a valid day",
          month: '',
          year: ''
        }
      });
      return false;
    }

    setErrorMsg((pre) => {
      return {
        day: '',
        month: '',
        year: ''
      }
    });
    return true;
  }

  const onFormSubmit = (event) => {

    event.preventDefault();

    if (isValidDate()) {
      calculateAge();
    }
  }

  return (
    <>
      {/* Header to take DOB input */}
      <div className="container">
        <header className="header">
          <form className="form" onSubmit={onFormSubmit}>
            <div className="dob-inputs">
              <div className={`input-group ${errorMsg.day.length > 0 && 'error'}`}><label>Day</label>
                <input type="number" name="day" placeholder="DD" value={DOB.day === 0 ? '' : DOB.day} onInput={onInput} />
                <span>{errorMsg.day}</span>
              </div>
              <div className={`input-group ${errorMsg.month.length > 0 && 'error'}`}><label>Month</label>
                <input type="number" name="month" placeholder="MM" value={DOB.month === 0 ? '' : DOB.month} onInput={onInput} />
                <span>{errorMsg.month}</span>
              </div>
              <div className={`input-group ${errorMsg.year.length > 0 && 'error'}`}><label>Year</label>
                <input type="number" name="year" placeholder="YYYY" value={DOB.year === 0 ? '' : DOB.year} onInput={onInput} />
                <span>{errorMsg.year}</span>
              </div>
            </div>
            <div className="divider-panel">
              <hr />
              <button type="submit" className="arrow-btn">
                <img src={arrowIcon} alt="arrow button" />
              </button>
            </div>
          </form>
        </header>

        {/* Block to show age */}
        <div className="age-block">
          <h1 className="age-heading">
            <span>{age.years}</span> years
          </h1>
          <h1 className="age-heading">
            <span>{age.months}</span> months
          </h1>
          <h1 className="age-heading">
            <span>{age.days}</span> days
          </h1>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/sahilatahar">sahilatahar</a>.
      </div>
    </>
  );
}

export default App;
