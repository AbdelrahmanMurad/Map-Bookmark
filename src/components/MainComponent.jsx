export let MainComponent = (props) => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center  pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{props.pageName}</h1>
                <div className=" mb-2 mb-md-0">
                    <div className="d-flex align-items-center ms-3 ms-lg-4">
                    </div>
                    <div className="d-flex align-items-center ms-3 ms-lg-4">
                    </div>
                </div>
            </div>
        </main>
    );
}