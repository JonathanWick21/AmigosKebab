function Product(props) {
    const { image, name, precio, descripcion } = props;
    return (
        <article
            tabIndex="0"
            aria-label={`Producto ${name}`}
            className="flex flex-col items-center gap-3 p-4 rounded-lg shadow-md bg-white max-w-[320px] mx-auto"
        >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={image}
                    alt={`Foto de ${name}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{descripcion}</figcaption>
            </figure>

            <div className="pt-5 text-center">
                <header>
                    <h2 className="product-name">{name}</h2>
                </header>
                <p className="product-price"><strong>{precio} €</strong></p>
                <p className="product-desc">{descripcion}</p>
            </div>
        </article>
    );
}

export default Product;