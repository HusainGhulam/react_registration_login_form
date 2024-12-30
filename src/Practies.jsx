export const Practies =()=>{
    const students = [1,3];
    return (
        <>
        {/* <p>{students.length && "no record found"}</p> */}
        {/* 1st trik */}
        {/* <p>{students.length===0 && "no record found"}</p> */}
        {/* <p>{!students.length && "no record found"}</p> */}
        {/* <p>{!students.length && "no record found"}</p>
        <p>Number of Students:{students.length}</p> */}
        {students.length === 0 ? (
                <p>No records found</p>
            ) : (
                <p>Number of Students: {students.length}</p>
            )}
        </>
    );
    
}