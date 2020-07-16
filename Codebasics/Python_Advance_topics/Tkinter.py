import tkinter as tk


def Test_window():
	test_window = tk.Tk()
	test_window.title("test_window")
	test_window.geometry("500x500")

	button = tk.Button(test_window, text='start', width=25, 
					   activebackground='limegreen',
					   command=test_window.destroy)
	button.pack()
	test_window.mainloop()

def Test_canvas():
	master = tk.Tk()
	test_window2 = tk.Canvas(master, width=400, height=600)
	

	test_window2.pack()
	canvas_height = 20
	canvas_width = 200

	y = int( canvas_height / 2 )
	test_window2.create_line(0, y, canvas_width, y)
	test_window2.mainloop()

def Check_button():
	master = tk.Tk()
	option1 = tk.IntVar()
	option2 = tk.IntVar()
	tk.Checkbutton(master,  text="male", variable=option1).grid(row=0, sticky='w')
	tk.Checkbutton(master,  text="female", variable=option2).grid(row=1, sticky='w')
	
	master.mainloop()

if __name__ == '__main__':
	#Test_window()
	#Test_canvas()
	Check_button()
