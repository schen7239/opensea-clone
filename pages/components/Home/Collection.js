function Collection({title, image, id, bgColor}) {
    return (
        <div className="h-[600px] w-[400px] mx-auto rounded-xl hover:shadow-lg">
                <img className="h-[400px] w-[400px] rounded-xl object-cover" src={image} alt="" />
                <p className="h-[200px] p-5 text-center">{title}</p>
        </div>
    )
}

export default Collection
