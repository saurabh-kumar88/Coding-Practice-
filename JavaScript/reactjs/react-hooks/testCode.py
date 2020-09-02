class Pizza:

  """
  This is pizza class
  """

  def __init__(self, type_):
    self.type_ = type_
    # self.shape = 'round'
    self.size_ = 'small'

  # instance method
  # def __call__(self, shape=None):

  #   if shape:
  #     self.shape = shape
  #     return print(f"Submitting a {self.type_} pizza order with change of shape ----- {self.shape}")
  #   else:
  #     print(f"Submitting a {self.type_} pizza order with default shape ----- {self.shape}")

  def __call__(self, size_=None):
    if size_:
      self.size_ = size_
      return print(f'Submitting a {self.type_} pizza order with change of size ----- {self.size_}')
    else:
      return print(f'Submitting a {self.type_} pizza order with default size ----- {self.size_}')



if __name__ == "__main__":
    obj = Pizza(type_ = "veggie")
    obj('medium')