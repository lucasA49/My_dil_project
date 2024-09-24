import '../styles/Project_Form.css';

const P_Form = () => {
    return (
        <div className="main-content">
            <h1><u>Créer</u> mon projet</h1>
            <form>
                <h3 className='form-titles'>Nom du projet</h3>
                <input type='text' name="project_name" />
                <h3 className='form-titles'>Compétences</h3>
                <input type='text' name="project_skills" />
                <h3 className='form-titles'>Description</h3>
                <textarea name="project_description" id=""></textarea>

                <input type="submit" name="project_form_submit" />
            </form>
        </div>
    );
};


export default P_Form;