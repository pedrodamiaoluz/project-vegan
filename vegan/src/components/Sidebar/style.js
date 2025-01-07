import styled from 'styled-components'

export const SideBar_Container = styled.div`
.sidebar__login{
    display: flex;
    align-items: center;
    padding: 0.5rem 0.2rem;
    gap: 0.4rem;
}

.sidebar__login img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}

.sidebar__nav {
    position: fixed;
    width: 15rem;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
    border-right: 0.01rem solid rgba(0, 0, 0, 0.1);
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .30s;     */
}

.navegacao{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 2rem;
}

.navegacao li{
    list-style-type:  none;
    padding: 0.8rem 0;
    display: flex;
    align-items: center;
    gap: 5px;

    span{
        color: #4EEA18;
        font-size: 23px;
    }
}

.navegacao li a,
.sidebar_desconect a{
    text-decoration: none;
    color: #2E332C;
    font-size: 1rem;
    font-weight: 500;
    transition: .2s;
}
.navegacao li a:hover,
.sidebar_desconect a:hover{
    color: #4EEA18;
}

.sidebar_desconect{
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.2rem 0 0.2rem;

    span{
        color: #4EEA18;
        font-size: 23px;
    }
}
`