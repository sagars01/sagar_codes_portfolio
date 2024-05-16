import Card from "../Common/Card"

const OptionCards = ({ scrollToPortfolio }) => {
    return (
        <>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                    title="About Me"
                    description="Learn about my background, experience, and interests."
                    link="/about"
                    onClick={scrollToPortfolio}
                />
                <Card
                    title="My Projects"
                    description="Explore a collection of my personal and professional projects."
                    link="/projects"
                    onClick={scrollToPortfolio}
                />
                <Card
                    title="Notes"
                    description="My notes on Software Engineering, Career and Life"
                    link="https://blog.sagarmoy.work"
                />
            </div>
        </>
    )
}

export default OptionCards