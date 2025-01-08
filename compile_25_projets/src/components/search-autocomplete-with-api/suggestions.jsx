export default function Sugestions({ data, handleClick }) {
    return (
        <ul>
            {data && data.length > 0
                ? data.map((item, index) => (
                      <li onClick={handleClick} key={index}>
                          {item}
                      </li>
                  ))
                : null}
        </ul>
    );
}
