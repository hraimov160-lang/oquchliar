import students from "../data/studets";
import "../App.css";

function Main() {
  return (
    <main>
      <h2>Student List</h2>
      <div className="grid">
        {students.map((student) => (
          <div className="card" key={student.id}>
            <div
              className="avatar"
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                overflow: "hidden",
                flex: "0 0 56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#eef2ff",
              }}
            >
              {student.avatar ? (
                <img
                  src={student.avatar}
                  alt={`${student.name} ${student.surname}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <span style={{ fontWeight: 700, color: "#0b1220" }}>
                  {student.name[0]}
                  {student.surname[0]}
                </span>
              )}
            </div>
            <h3>
              {student.name} {student.surname}
            </h3>
            <a href={student.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href={student.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
