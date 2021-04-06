const useSession = () => {
	return sessionStorage.getItem("login");
};

export default useSession;
