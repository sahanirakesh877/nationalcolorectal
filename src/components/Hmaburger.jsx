import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { titles } from "../data/navData";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  closeHamburger,
  stateHamburger,
  toggleHamburger,
} from "../api/hamburger";

const HambergerMenu = () => {
  const datas = false;
  

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryFn: stateHamburger,
    queryKey: ["hamburger"],
  });

  const mutation1 = useMutation({
    mutationFn: toggleHamburger,
    onSuccess: () => {
      queryClient.invalidateQueries(["hamburger"]);
    },
  });

  const mutation2 = useMutation({
    mutationFn: closeHamburger,
    onSuccess: () => {
      queryClient.invalidateQueries(["hamburger"]);
    },
  });

  const handleClose = () => {
    mutation2.mutate();
  };
  const handletoggle = () => {
    mutation1.mutate();
  };

  return (
    <div className="flex md:hidden text-md">
      <button
        className="text-3xl text-slate-700 font-bold"
        onClick={() => handletoggle()}
      >
        <RxHamburgerMenu />
      </button>

      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          {data ? (
            <div className="fixed top-24  right-0 w-[100%] z-10 bg-blue-100 border-[#d7d7d7] sm:top-24 h-screen sm:px-8">
              <div className="flex flex-col justify-between h-[80%]">
                <div className="md:hidden">
                  {titles.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <div className="p-2">
                          <Link to={`${item.path}`}>
                            <button
                              className={`w-full hover:bg-gray-200  p-2 text-left font-medium mr-4  rounded-[4px]`}
                              onClick={() => {
                                handleClose();
                              }}
                            >
                              <span className={`md:hidden `}>{item.title}</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

               
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default HambergerMenu;
