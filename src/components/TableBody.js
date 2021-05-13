const TableBody = (props) => {
    const rows = props.charactersData.map((characters, index) => {
        return (
            <tr>
                <td>{characters.name}</td>
                <td>{characters.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );

    });
    return <tbody>{rows}</tbody>;
};

export default TableBody;