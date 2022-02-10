import React from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";
import { calendarItems } from "../constants";
const Calendar = () => {
    return (
        <div className="Calendar">
            <div className="header">
                <div className="title">
                    <CalendarDate size="18" />
                    <p>Calendar</p>
                </div>
                <div className="btns">
                    <span>
                        <CaretUp size="20" />
                    </span>
                </div>
            </div>
            <div className="items">
                {/* Untuk menampilkan semua items, menggunakan array map yang return nya nanti adalah objek */}
                {/* Array Map ini membutuhkan key agar bisa di tampilkan dengan key yang berbeda */}
                {calendarItems.map((item) => (
                    <div className="item" key={item}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
