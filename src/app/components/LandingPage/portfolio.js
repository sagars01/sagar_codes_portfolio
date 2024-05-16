const PortfolioShowcase = ({ portfolioRef }) => {
    return (
        <section ref={portfolioRef} className="mt-16 p-8 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">My Portfolio</h2>
            {/* Add your portfolio projects here */}
            {/* Example using the Card component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* ... your Card components ... */}
            </div>
        </section>
    );
};

export default PortfolioShowcase;
