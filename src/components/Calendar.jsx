import React, { useState } from 'react';

const DAYS_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Generate time slots from 12:30pm to 6:00pm in 30-min increments
const TIME_SLOTS = [];
for (let h = 12; h <= 18; h++) {
  for (let m = 0; m < 60; m += 30) {
    if (h === 12 && m === 0) continue; // start at 12:30
    if (h === 18 && m > 0) continue;   // end at 6:00
    const hour12 = h > 12 ? h - 12 : h;
    const suffix = h >= 12 ? 'pm' : 'am';
    const label = `${hour12}:${m.toString().padStart(2, '0')}${suffix}`;
    TIME_SLOTS.push(label);
  }
}

const Calendar = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null); // null = no form, string = booking form
  const today = new Date();

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleString('default', { month: 'long' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isToday = (d) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

    const handleDateClick = (d) => {
    if (!d) return;
    const targetDate = new Date(year, month, d);
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);
    // Disallow past dates
    if (targetDate < todayMidnight) return;
    // Disallow dates beyond the 6th of the month
    if (d > 6) return;
    // Disallow booking for today after 6pm
    const now = new Date();
    const isTodayDate = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    if (isTodayDate && now.getHours() >= 18) return;
    setSelectedDate(targetDate);
  };

  const handleBack = () => {
    if (selectedTime) {
      setSelectedTime(null);
    } else {
      setSelectedDate(null);
    }
  };

  // ─── Booking Form View ───
  if (selectedDate && selectedTime) {
    const dayName = DAYS_FULL[selectedDate.getDay()];
    const fullMonth = selectedDate.toLocaleString('default', { month: 'long' });
    const fullDate = `${fullMonth} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;

    const inputStyle = {
      width: '100%',
      padding: '14px 16px',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.12)',
      backgroundColor: 'transparent',
      color: '#e8e2c0',
      fontFamily: "'Nunito', sans-serif",
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
    };

    return (
      <div
        style={{
          backgroundColor: '#1e1a1b',
          borderRadius: '16px',
          padding: '28px',
          width: '340px',
          fontFamily: "'Nunito', sans-serif",
          color: '#e8e2c0',
        }}
      >
        {/* Your name */}
        <label style={{ display: 'block', marginBottom: '20px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
            Your name <span style={{ color: '#6b6360' }}>*</span>
          </span>
          <input type="text" style={inputStyle} />
        </label>

        {/* Email */}
        <label style={{ display: 'block', marginBottom: '20px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
            Email address <span style={{ color: '#6b6360' }}>*</span>
          </span>
          <input type="email" style={inputStyle} />
        </label>

        {/* Additional notes */}
        <label style={{ display: 'block', marginBottom: '24px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
            Additional notes
          </span>
          <textarea
            rows={4}
            placeholder="Please share anything that will help prepare for our meeting."
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: '100px',
            }}
          />
        </label>

        {/* Add guests */}
        <div style={{ marginBottom: '20px' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#6b6360',
              fontFamily: "'Nunito', sans-serif",
              fontSize: '14px',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '16px' }}>👥</span> Add guests
          </button>
        </div>

        {/* Terms */}
        <p style={{ fontSize: '12px', color: '#6b6360', margin: '0 0 20px', lineHeight: 1.5 }}>
          By proceeding, you agree to our{' '}
          <span style={{ color: '#e8e2c0', cursor: 'pointer' }}>Terms</span> and{' '}
          <span style={{ color: '#e8e2c0', cursor: 'pointer' }}>Privacy Policy</span>.
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={handleBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#e8e2c0',
              fontFamily: "'Nunito', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '10px 16px',
            }}
          >
            Back
          </button>
          <button
            style={{
              backgroundColor: '#e8e2c0',
              color: '#241E21',
              border: 'none',
              borderRadius: '8px',
              fontFamily: "'Nunito', sans-serif",
              fontSize: '15px',
              fontWeight: 900,
              cursor: 'pointer',
              padding: '10px 24px',
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }

  // ─── Time Slot View ───
  if (selectedDate) {
    const dayName = DAYS_FULL[selectedDate.getDay()];
    const fullMonth = selectedDate.toLocaleString('default', { month: 'long' });
    const fullDate = `${fullMonth} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;

    return (
      <div
        style={{
          backgroundColor: '#1e1a1b',
          borderRadius: '16px',
          padding: '24px',
          width: '300px',
          fontFamily: "'Nunito', sans-serif",
          color: '#e8e2c0',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
          <button
            onClick={handleBack}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#2a2526',
              border: 'none',
              color: '#e8e2c0',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ←
          </button>
          <span style={{ fontSize: '22px', fontWeight: 900 }}>{dayName}</span>
        </div>

        {/* Date */}
        <p style={{ margin: '0 0 12px 48px', fontSize: '15px', color: '#6b6360' }}>{fullDate}</p>

        {/* Meta info */}
        <div style={{ margin: '0 0 20px 48px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6b6360' }}>
            <span>🕐</span>
            <span>30m</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6b6360' }}>
            <span>🌐</span>
            <span>Asia/Kolkata ▾</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', marginBottom: '20px' }} />

        {/* Time slots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '280px', overflowY: 'auto' }}>
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              style={{
                width: '100%',
                padding: '14px 0',
                borderRadius: '28px',
                border: '1px solid rgba(255,255,255,0.12)',
                backgroundColor: 'transparent',
                color: '#e8e2c0',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3b3bff';
                e.currentTarget.style.borderColor = '#3b3bff';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = '#e8e2c0';
              }}
              onClick={() => setSelectedTime(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ─── Calendar View ───
  return (
    <div
      style={{
        backgroundColor: '#2a2526',
        borderRadius: '16px',
        padding: '20px',
        width: '300px',
        fontFamily: "'Nunito', sans-serif",
        color: '#e8e2c0',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <span style={{ fontSize: '15px', fontWeight: 700 }}>
          {monthName} <span style={{ color: '#6b6360' }}>{year}</span>
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={prevMonth}
            style={{
              background: 'none',
              border: 'none',
              color: '#6b6360',
              cursor: 'pointer',
              fontSize: '16px',
              padding: '2px 6px',
            }}
          >
            ‹
          </button>
          <button
            onClick={nextMonth}
            style={{
              background: 'none',
              border: 'none',
              color: '#6b6360',
              cursor: 'pointer',
              fontSize: '16px',
              padding: '2px 6px',
            }}
          >
            ›
          </button>
        </div>
      </div>

      {/* Day headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        {DAYS_SHORT.map((d) => (
          <span
            key={d}
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: '#6b6360',
              letterSpacing: '0.04em',
            }}
          >
            {d}
          </span>
        ))}
      </div>

      {/* Date grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '4px',
        }}
      >
        {cells.map((d, i) => {
          const todayCell = isToday(d);
          const targetDate = new Date(year, month, d);
          const todayMidnight = new Date();
          todayMidnight.setHours(0, 0, 0, 0);
          const isBookable = d && d <= 6 && targetDate >= todayMidnight; // only first 6 days and not past
          return (
            <div
              key={i}
              onClick={() => isBookable && handleDateClick(d)}
              style={{
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: todayCell ? 900 : 400,
                backgroundColor: todayCell ? '#3b3bff' : 'transparent',
                color: d
                  ? todayCell
                    ? '#fff'
                    : isBookable
                    ? '#e8e2c0'
                    : '#6b6360'
                  : 'transparent',
                opacity: d ? 1 : 0,
                cursor: d ? (isBookable ? 'pointer' : 'default') : 'default',
                transition: 'background-color 0.15s',
              }}
              onMouseEnter={(e) => {
                if (d && !todayCell && isBookable) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={(e) => {
                if (d && !todayCell && isBookable) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {d || ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
