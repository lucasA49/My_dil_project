import '../styles/Project_Form.css';

const Project_Form = () => {
    return (
        <div className="main-content">
            <div className="formpage">
                <h1><u>Créer</u> mon projet</h1>
                <form>
                    <div className='formbox'>
                        <h3 className='form-titles'>Nom du projet</h3>
                        <input type='text' name="project_name" className='inputform' />
                    </div>
                    <div className='formbox'>
                        <h3 className='form-titles'>Compétences</h3>
                        <input type='text' name="project_skills" className='inputform' />
                    </div>
                    <div className='formbox'>
                        <h3 className='form-titles'>Description</h3>
                        <textarea name="project_description" className='project_description'></textarea>
                    </div>
                    <div className='submitbox'>
                        <input type="submit" name="project_form_submit" className='project_form_submit' value="Créer" />
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Project_Form;