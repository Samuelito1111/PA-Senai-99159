import './style.css'

function InfoAluno() {
    const nome = "Samuel Cruz"
    const idade = 20
    const curso = "Engenharia de Software"

    return (
        <div className="info-aluno">
            <h2>Informações do Aluno</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}

export default InfoAluno