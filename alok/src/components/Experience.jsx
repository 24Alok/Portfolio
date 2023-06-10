
import React from "react";

const Experience = () => {
  return (
    <div id="experiences">
            <h2 class="section-heading mb75px">
                <span>
                    <i class="fas fa-briefcase"> </i>
                </span>
                <span>  Work Experience / Internship </span>
            </h2>

            <div class="timeline">

                <div class="timeline-box left">
                    <div class="timeline-container">
                        <div class="timeline-logo">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4SDQ8QEBIPDxAQEA4TDhAQERIQEBAUFRIXFxUTFRUZHSggGBolGxUVITUtJSstLi4uFx8zOjMsOSouLysBCgoKDg0OGxAQGzclICY4LS8rNS8rNi0vLTctLS0tLS0tLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBgcEAv/EAEEQAAIBAwAGBQkFBwMFAAAAAAABAgMEEQUGEiExYRNBUXGhBxQiMkJSgZGxIzNzwfBiY3KCkqLhNbLRFSQlQ1P/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QALhEBAAICAQMCBQMEAwEAAAAAAAECAwQRBSExMkESE1FhkSJCcTOBodEkNEMU/9oADAMBAAIRAxEAPwCsPVPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAMgAAAAAAAAAAAAAAAAAAAAAAAAAGWOUZHAhyRjsd58LC00LeVfu7etJdT2HGP9UsI5W2MVfMpFNbNfxVdWmoV/P1+ior9qe1L5RTXiRrdRxR47pdOlZreeyv1k0LTtJxpdL01Vramow2Iwi+C4ttve+466+e2Xm3HEI+1rVwT8PPMqckokAZAAAAAAAAAAAAAAAAAAAHByjJk5HJdwY8vTaaPuKuOio1aifBxhJx+fA52zY6+ZdaYcl/TVdWmo+kZ8YQpL97UX0jkjW38UeO6XTpme3mOF1aeTjrrXHfGlDH90n+RGv1Kf21TMfRu/67Lm01G0fD1oTqvtqVH9I4XgRrb2a3vwmU6Xgr7cryz0bb0vuqNKn/AAQjF/NLJHtlvb1Sl0wY6emIh6VJPhvObtHDw6c0pC2tp1p79lYhHg5zfqxX64ZOuHFOS8VhH2c8Ycc2lxi7uZ1as6tR7U6knKb5v8uo9HSkUrEQ8jfJN7TafdiNmoAAAAAAAAAAAAAAAM8CMhjlltrarUeKdOpUf7uEp/RM0tkrXzLeuO9vTHK5tNTtI1P/AE9Gu2rKMPDe/Aj23sMeJS6dOz29uF1aeTmq8dLXhHtVODl8m2voRrdSiPTVMx9HtPqsubTUGwh6/S1n+3PZXygkRb7+W3jsmU6Vhjz3XdnoSzpfdUKMH72wnL+p7yPbNkt5lLpq4qeKrA5O8REeEYDIBR6T1otqU1ShtXNw3iNGgtuWexvhEkY9a9o+Ke0fdCy71KT8Ne8/ZltLa6q4ndNU4vha0XmK/FqcZvksR7zW00r2r+W9K5L98nb7LZRSWEkklhJbkjlzzKT4hyjXfTnnNzsQeaFBtQ7Jy9qf5LkuZeaWD5dPinzLy/UNr52TiPENdJqAAAAAAAAAAAAABMYttJJttpJJZbb4JIc8RzLHeey3tNVdIVMbNCcU+ups018pNPwI9tzDX3TMejnv4qubTyd3L+9rUafKClUfjsojX6lX9sJdOj5J9U8Lq08ntnH7ydar2raVOP8Aas+JGv1DLPjsmY+kYo72nld2erdhSw4W9LK4SlHpJfOWSLbYy28ymU0sNPFVpGKSwkkuxLCOXKRFYjwkw2MAAIAZHBM8d5a3prXSzoZjF+cVV7FJrZT/AGp8F8MvkS8Olkyd57QrtjqOLH2jvLXKFxpXSkmoy82tctSlHMab7VnjUfLh3Ey1cGtH1sgVvs7k9u1W5aB1ftrSGzSj6TWJ1Zb5z+PUuS3Fdmz3yT3W2vqY8Mdo7rU4pTVNftO9BQ6Cm8Vq6eWuMKfBy73wXx7CdpYPmW+KfEKrqe18unwV8y5ei9ecSYAAAAAAAAAAAAAA4G66ra7yp7NG7bnDcoVuM48p+8ufHvKza0Yn9WP8LfT6lNeKZfH1dDp1IyipRalGSTjJPKafWmVM1mJ4lf1tFo5h9GGyQAAABDlhZe5dbe7AjuxMxHeWraa14tKOY0v+5qb90H9mnzn/AMZJ2HRyX7z2hW7HU8ePtXvLRdK6xX15LYcpbMniNCimlLk0t8/iWePWxYY5n/Kmy7ebPbj/ABDZdWtQ+FS85ONunuX4jX0X+CFsb/7caw1Ol/uy/hvlOnGMVGKUYxWIqKwkuxLqKyZ5nmV3WsVjiH0YZebSV9ToUalao8Qpxy+19kVzbwvib48c3tFYc82SuKk2s4vpO/qXFepWqetN5x1RXVFcktx6PDjjHWKw8fmy2y3m0vMdOHMAAAAAAAAAAAAAAAAXereste0lhfaUG/Tot8O2UH7L8H4kXZ1a5Y58Smau7fBPHs6lonStC5pKpRltLdtJ7pwfZJdTKPLhtjtxaHpcGxTNXmsvac3dIHzOaSbbSSWW28JLtbHEz2Ym0RHMy1PTWvdtSzGgvOZ9sXs0l/N7Xw+ZPw6F7ertCqz9UpTtTvLRNMawXdy/taj2OqlD0aa717XxyWmLVx4/EKXNuZc3qnsaC1fubuWKUdmCfp1ZZUI8l7z5LwGfapijvPdnW1L5p/T4dQ1f1bt7SPoLbqtenVn675L3VyXiUmfZvlnv4ej1tPHgjt3n6rgjpiQIA5l5QNO9NW82pvNKjJ7bXCdTg/hHeu/JdaGv8Nfjt5l5vqW18y/wV8Q1IsFWAAAAAAAAAAAAAAAAAAD06N0hWt6qq0ZOElx92S92S60c8mKuWOLQ6Ys18VvipLqOrGtNK7Ww/s66XpU290scZQfWuXFeJSbGpbFPPs9Jp71c8fDPl8a3az+Z7EI0+kqVIycXJ4hFJ4343v8AW8zq6vzeZ58Mb29/8/ERHeXNtLaaurl5rVHKOcqmvRpx7or88suMWvjxeIefzbWXNPNp7PBGLbSScm3iKSy231JLid5mIjmUeKzM8Q3jVvUSUtmreZjHiqCfpP8AEa4dy393Aqtjf/bj/K61OlzP6sv4dAoUYQhGEIxhGKxGMUlGK5JFXa0zPMrylK0jisMhq3AAGu66ad81tsQf21XMaXbFe1P4Z+bRL1MHzb9/Cv39r5NOI8y5Mi/eXBAAAAAAAAAAAAAAAAAAAABsnk7j/wCThypVmv6cfmQt/wDorDpf/Yj+6w8qn39r+HU/3I5dM9NnfrPrr/DWtCaGuLqpsUY7ljbqS3Qgn2vt5LeTc+xTDHNldr61888VdP1d1Yt7RZX2lbGJVZLeuUF7K/WSjz7V8s/Z6XV0aYe/mfqvCMmpAAAMNzcQp051JtRhCLlOT6kuJtWs2niGmS8UrNp8OM6d0rO6uZ1pZSe6nH3IL1V39b5tnotfDGKkRDyOzntnyTaXgOzgAAAAAAAAAAAAAAAAAAAADEtl8nX+pR/Cq/REPqH9FYdL/wCwsfKhCUrm0jFOUpQmoxXFtzSSXxOHTrRWlplK6vWbZKRDb9WdDxtbWFLc5v0q0l7U3x+C3JckV+xmnLebLXT14w44j391pKSXHdw47uPA4xHKTMxHlJhlIACAxMueeUbTu1LzOm/Ri1K4a65cYw+HF88dhb9P1/8A0t/ZQ9U2uZ+XX+7SCzUwAAAAAAAAAAAAAAAAAAAAABsvk6/1KP4Vb6Ih9Q/orDpf9d0O50VGpe0bme/oKc404/tyfrfBfXkU9cs1xzSPdf314vljJPs82sOs9vaJqT6Stj0aMWtrvk/ZX6wzfBrXy+PDns72PD28y5lpzTtzdzzVliCeYUo5VOPw63zfgXWHWpijiPLzuxt5M08zK91a13qUtmldOVWksKNTjVh3++vHvIuzoxb9VEzT6nan6cneHRrW5p1YRqU5RnCW+MovKZUWrNe0vQY8lbx8VZ5ZjVuptadNK1tZTWHUlmNGL65PrfJcX/kka2Gct+PZD3dmMGOZ9/Zx6c3JuUm5Sk25N7223lt88nooiKxxDyczNp5lAAAAAAAAAAAAAAAAAAADgBwxyQTbUYpyk+EUst9yXETMR5ZrEz2iGe5sqtNfaR6NvGISaVTvcOMV34NaZK29La2O1fUutQq8Kd/t1JRhCNGs5Sk8JblxZG3qzbFxH1S+nXimbm33WusWvcpZp2eYR4OvJenL+CL9Xve/uI+vofuyfhL2+qTb9OLx9WlNtttttt5bbbbfa31llERHhTzMzPMoMgZFjoXTVxaz2qMvRbW3Tlvpz711PnxI+bXpljuka+zkwzzWXTdBa0W1zBtSVKpGLdSnNpOKS3yT9qPP54KXNq3xzxx2ei19/Hlr9J93ONadNO7uXNZ6KGY0Iv3c+s12vj8l1Fzq4PlU49/d5/c2fn5Jn29lQSEUAAAAAAAAAAAAAOAADgMjgIptqKTcnwillvuXWJmI8yREz2hdWuqt5KO3UjC2p7s1LmapJfDj4IjW3McTxXv/AAlU0ssxzbtH3ZHb6KoevUq3017NFdDR+M3va5o0+LYyeI+GG/wa2LzPxT9vDBX1hq7LhbwpWcHxVCOKkv4qr9J+B0rq183nmfv/AKaW27ccUj4Y+3+1Q8ttve3vbe9t9uSRERHhFnvPMmAxwBkAAAAAAAAAAAAAAAAAAAAAyZY5ZLahUqS2acJ1JdkIuT8DW161jm0tq0tef0xytY6tV4pO4nQs4/v6kdt90I5b8CPO3WfREykxp283mK/y+4rRVLi7i+l2RXm9Hx9M1/5F/pX/AC2iNan1tP4hL1prRTja0rezi/8A5QUqj76kuPyEacT3yTMk7to7Y4iqnurmpVltVZzqy7aknJruzwJNcdK+mEW+S9/VPLFg3acBhkHAAAAAAAAAAAAAAAAAAAAAAAALT/qNrD7m0pyfVO6nKu3/ACLEV8iP8nJb1X/HZI+djr6Kfl83Gn7ycdnpZU4e5RSow7sQSM11cde/HP8APdi21lt254j7K18cve+t8WzvERDhPM+UYM8kJMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" alt=""/>
                        </div>
                        <h3 class="experience-designation  m0 m-blue">Web Development </h3>
                        <h4 class="experience-company-name"> Internshala </h4>
                        <h5 class="experience-duration m0"> July 2021 - Dec 2021 </h5>
                        <p class="experience-description text-justify"> 
                           <ul>
                              <li>My task was to built a basic E- commerce website.</li>
                              <li>A responsive website made using PHP, MySql, Bootstrap, HTML and CSS.</li>
                           </ul>
                        </p>
                    </div>
                </div>
                
                <div class="timeline-box right ">
                    <div class="timeline-container">
                        <div class="timeline-logo">
                        <img src="https://1000logos.net/wp-content/uploads/2017/05/Red-YouTube-logo.png " alt=""/>
                        </div>
                        <h3 class="experience-designation  m0 m-blue"> Mern Stack Developer </h3>
                        <h4 class="experience-company-name"> Youtube </h4>
                        <h5 class="experience-duration m0"> Jan 2022 - Ongoing</h5>
                        <p class="experience-description text-justify">
                        <ul>
                           <li>Proficient in the MERN (MongoDB, Express.js, React.js, Node.js) stack.</li>
                           <li>Strong knowledge of front-end technologies like HTML, CSS, and JavaScript, Redux & Redux Toolkit.</li>
                           <li> Familiarity with version control tools like Git and collaborative platforms like GitHub.</li>
                           <li>Understanding of RESTful API design principles and practices.</li>
                           <li><a target="blank" href="https://chatify-acij.onrender.com/" alt="/"> Chatify:</a> A social media web application. </li>

                        </ul>
                        </p>
                    </div>
                </div>

               

                <div class="timeline-divider">
                    <div class="timeline-traveller">
                        <div>
                            <i class="fas fa-plane"></i>
                        </div>
                    </div>
                </div>

            </div>

        
    </div>
  );
};



export default Experience;
