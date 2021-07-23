<template>

    <section>
        <div class="container">
            <FuteSectionNewsIndividual
                v-for="notice in news"
                :key="notice.id"
                :img-name="notice.img"
                :img-info="notice.info"
                :news-date="notice.date"
            >
                <template #title>
                    <h2>{{notice.title}}</h2>
                </template>
                <p>{{ notice.content | truncate(200) }}</p>
            </FuteSectionNewsIndividual>
        </div>
    </section>

</template>

<script>
import FuteSectionNewsIndividual from './FuteSectionNewsIndividual';

export default {
    components: {
        FuteSectionNewsIndividual,
    },
    data() {
        return {
           news: [] 
        }
    },
    created() {
        this.news = [
            {
                id: 1,
                title: 'Começas os trinos para a nova temporada',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit recusandae eveniet quisquam? Accusantium, corrupti! Vero perspiciatis, debitis accusamus dolore eum vel maxime veniam culpa! Exercitationem consequatur assumenda quaerat delectus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laborum sint totam incidunt expedita magnam repellendus. Reprehenderit sunt blanditiis explicabo modi reiciendis quasi. Amet eum nihil autem maiores repellat inventore.',
                date: '2020-01-01',
                img: 'news1.jpg',
                imgInfo: 'Notícias 1',
            },
            {
                id: 2,
                title: 'Jogo de quarta-feira termina empatado',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit recusandae eveniet quisquam? Accusantium, corrupti! Vero perspiciatis, debitis accusamus dolore eum vel maxime veniam culpa! Exercitationem consequatur assumenda quaerat delectus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laborum sint totam incidunt expedita magnam repellendus. Reprehenderit sunt blanditiis explicabo modi reiciendis quasi. Amet eum nihil autem maiores repellat inventore.',
                date: '2020-01-24',
                img: 'news2.jpg',
                imgInfo: 'Notícias 2',
            },
            {
                id: 3,
                title: 'A inauguração do Allianz Park antigo Palestra Itália',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit recusandae eveniet quisquam? Accusantium, corrupti! Vero perspiciatis, debitis accusamus dolore eum vel maxime veniam culpa! Exercitationem consequatur assumenda quaerat delectus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laborum sint totam incidunt expedita magnam repellendus. Reprehenderit sunt blanditiis explicabo modi reiciendis quasi. Amet eum nihil autem maiores repellat inventore.',
                date: '2020-01-06',
                img: 'news3.jpg',
                imgInfo: 'Notícias 3',
            },
        ]
    }
}

</script>

<style scoped>
section{
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520;
}
</style>