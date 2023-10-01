import {FC, Suspense} from "react";
import {AppImage} from "@/shared/ui/Image";
import styles from "../EventInfoSection/EventInfoSection.module.scss";
import classNames from "classnames";
import {Card} from "@/shared/ui/Card";
import {Text} from "@/shared/ui/Text";
import {CommentForm} from "@/features/CommentForm";

interface EventInfoSectionProps {
    className?: string;
}
export const EventInfoSection: FC<EventInfoSectionProps> = (props) => {

    const {
        className
    } = props;

    return <>
        <section className={classNames(styles.EventInfoSection, className)}>
            <AppImage
                className={styles.img}
                src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'}/>

            <Card>
                <Text title={'Titleeee'}/>
            </Card>

            <Card title={'Описание'}>
                <Text text={'We believe that DCS is not suited for the Long Term.\n' +
                    '\n' +
                    'That all of the DCS challenges, including those highlighted above, are proof that DCS is a fundamentally flawed business model.\n' +
                    '\n' +
                    'As we see it, the fundamental problems with DCS can be divided into the following two categories:\n' +
                    '\n' +
                    'Forecasting\n' +
                    '\n' +
                    'It’s difficult to accurately forecast what demand and prices will be for a services business like air chartering. The business, like many service businesses, relies on customer perceptions and sentiment. If a customer feels like he or she can’t get the service or product you are offering, then you can be sure they will be difficult customers.\n' +
                    '\n' +
                    'Unfortunately, we are all guilty of being optimists when making projections. Even the most experienced businesses professionals have a difficult time predicting the future. All you can do is make an educated guess about what you think it will be.\n' +
                    '\n' +
                    'Pricing\n' +
                    '\n' +
                    'In general, a service provider or broker can charge whatever they want in a given market. If a company'}/>
            </Card>

            <Card>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CommentForm avatar={'https://img.championat.com/s/735x490/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg'}/>
                </Suspense>
            </Card>
        </section>
    </>

}
